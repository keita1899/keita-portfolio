class Api::PortfoliosController < ApplicationController
  include UserFindable

  before_action :set_user
  before_action :set_portfolio, only: :show

  def index
    portfolios = @user.portfolios.includes(:tags)

    render json: portfolios, each_serializer: PortfolioListSerializer
  end

  def show
    if @portfolio.nil?
      render json: { error: "Portfolio not found" }, status: :not_found
    else
      render json: @portfolio
    end
  end

  private

    def set_portfolio
      @portfolio = @user.portfolios.includes(:features, :pages, :images, :tech_stacks, :tags).find_by(id: params[:id])
    end
end
