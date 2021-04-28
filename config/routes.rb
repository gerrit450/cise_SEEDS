Rails.application.routes.draw do
  # route to this link: get 'homepage/login'

  root 'homepage#login' #root page of our project

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
