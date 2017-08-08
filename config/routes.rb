Rails.application.routes.draw do
  resources :houses

  devise_for :users
  get 'about' => 'welcome#about'
  get 'contact' => 'welcome#contact'

  root 'welcome#index'
end
