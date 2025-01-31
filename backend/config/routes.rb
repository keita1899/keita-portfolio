Rails.application.routes.draw do
  namespace :api do
    root to: "home#index"
    get "health_check", to: "health_check#index"
    get "about", to: "about#index"
    get "skills", to: "skills#index"
    get "portfolios", to: "portfolios#index"
    get "portfolios/:id", to: "portfolios#show"
  end
end
