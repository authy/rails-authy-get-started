RailsGetStarted::Application.routes.draw do
  get "users/show"

  resources :sessions do
    collection do
      get :two_factor_auth
      post :create_two_factor_auth
      get :logout
    end
  end
  resources :users, :only => [:show, :new, :create] do
    collection do
      get :enable_authy
      put :register_authy
    end
  end

  
  root :to => "pages#welcome"
end
