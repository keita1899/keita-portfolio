class Api::PortfoliosController < ApplicationController
  include UserFindable

  def index
    user = find_user
    portfolios = user.portfolios.includes(:features, :pages, :images, :tech_stacks, :tags)

    render json: portfolios, include: {
      features: { only: [:id, :name] },
      pages: { only: [:id, :name] },
      images: { only: [:id, :url] },
      tech_stacks: { only: [:id, :technology, :version] },
      tags: { only: [:id, :name] },
    }
  rescue ActiveRecord::RecordNotFound
    render json: { error: "User not found" }, status: :not_found
  end

  def show
    user = find_user
    portfolio = user.portfolios.includes(:features, :pages, :images, :tech_stacks, :tags).find(params[:id])

    render json: portfolio, include: {
      features: { only: [:id, :name] },
      pages: { only: [:id, :name] },
      images: { only: [:id, :url] },
      tech_stacks: { only: [:id, :technology, :version] },
      tags: { only: [:id, :name] },
    }
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Portfolio not found" }, status: :not_found
  end
end
