require 'rails_helper'

RSpec.describe StaticPagesController, type: :controller do
  describe 'GET #index' do
    before { get :root }

    it { should respond_with(200) }
    it { should render_template(:root) }
  end
end
