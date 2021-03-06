Rails.application.routes.draw do

  root to: "static_pages#root"

  resources :users, only: [:create, :new, :update]
  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: {format: :json} do
    resources :yards, only: [:create, :index, :show, :destroy]
    resources :users, only: [:index, :show]
    resources :bookings, only: [:create]
    get 'current_user', to: "users#get_current_user"
  end

end
