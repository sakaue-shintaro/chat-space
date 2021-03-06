Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :users,only:[:index,:edit,:update,]
    get '/users/sign_out' => 'devise/sessions#destroy'
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create,:edit, :update]
    namespace :api do
      resources :messages, only: :index ,defaults: { format: 'json' }
    end
  end
end
