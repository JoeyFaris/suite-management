Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :users
  resources :leases
  resources :requests
  
  get '/hello', to: 'application#hello_world'
  post '/login', to: 'sessions#create'
  post "/signup", to: "users#create"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
