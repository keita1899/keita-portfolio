Rails.application.routes.draw do
  namespace :api do
    get "health_check", to: "health_check#index"
    get "profile", to: "profile#show"
    get "about", to: "about#index"
    get "skills", to: "skills#index"
    get "portfolios", to: "portfolios#index"
    get "portfolios/:id", to: "portfolios#show"
  end
end
