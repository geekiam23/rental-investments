Rails.application.routes.draw do
  resources :houses do
    collection do
        get :compare
    end
  end

  devise_for :users
  get 'about' => 'welcome#about'
  get 'contact' => 'welcome#contact'

  root 'welcome#index'
end
