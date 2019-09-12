class HomeController < ApplicationController
  def index
    render component: 'Home', props: {}
  end
end
