Rails.application.routes.draw do

  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/signup", to: "api/v1/users#create"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"

  namespace :api do
    namespace :v1 do 
      resources :creations, only: [:index, :show, :create, :update, :destroy]
      resources :categories, only: [:index]
      resources :users, only: [:create]
      resources :comments, only: [:index, :create, :update, :destroy]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end