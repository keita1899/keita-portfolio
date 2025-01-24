class Api::PortfoliosController < ApplicationController
  def index
    user = find_user
    render json: { error: "User not found" }, status: :not_found and return if user.nil?

    portfolios = user.portfolios.includes(:tags)
    render json: portfolios, each_serializer: PortfolioListSerializer
  end

  def show
    user = find_user
    render json: { error: "User not found" }, status: :not_found and return if user.nil?

    portfolio = find_portfolio(user)
    if portfolio.nil?
      render json: { error: "Portfolio not found" }, status: :not_found
    else
      render json: portfolio
    end
  end

  private

    def find_portfolio(user)
      user.portfolios.includes(:features, :pages, :images, :tech_stacks, :tags).find_by(id: params[:id])
    end
end
