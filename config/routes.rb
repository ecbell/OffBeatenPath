Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :edit]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
