Rails.application.routes.draw do

  root to: "static_pages#root"

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: {format: :json} do
    resources :yards, only: [:create, :index, :show, :destroy]
    resources :users, only: [:index, :show]
  end

end
