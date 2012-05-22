RailsGetStarted::Application.routes.draw do
  get "users/show"

  resources :sessions do
    collection do
      get :two_step
      get :logout
    end
  end
  resources :users, :only => [:show] do
    collection do
      get :enable_authy
      put :register_authy
    end
  end

  root :to => "sessions#new"
end
