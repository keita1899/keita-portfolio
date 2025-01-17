class Api::PortfoliosController < ApplicationController
  include UserFindable

  before_action :set_user

  def index
    portfolios = @user.portfolios.includes(:features, :pages, :images, :tech_stacks, :tags)

    render json: portfolios, include: portfolio_includes
  rescue ActiveRecord::RecordNotFound
    render json: { error: "User not found" }, status: :not_found
  end

  def show
    portfolio = @user.portfolios.includes(:features, :pages, :images, :tech_stacks, :tags).find_by(id: params[:id])

    if portfolio.nil?
      render json: { error: "Portfolio not found" }, status: :not_found
    else
      render json: portfolio, include: portfolio_includes
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: "User not found" }, status: :not_found
  end

  private

    def set_user
      @user = find_user
    rescue ActiveRecord::RecordNotFound
      render json: { error: "User not found" }, status: :not_found
    end

    def portfolio_includes
      {
        features: { only: [:id, :name] },
        pages: { only: [:id, :name] },
        images: { only: [:id, :url] },
        tech_stacks: { only: [:id, :technology, :version] },
        tags: { only: [:id, :name] },
      }
    end
end
