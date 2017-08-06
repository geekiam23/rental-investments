Rails.application.routes.draw do

  get 'about' => 'welcome#about'
  get 'contact' => 'welcome#contact'

  root 'welcome#index'
end
