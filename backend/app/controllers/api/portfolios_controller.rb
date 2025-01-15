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
  end
end
