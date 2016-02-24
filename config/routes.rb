Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :destroy, :new]
end
