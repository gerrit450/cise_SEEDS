require "test_helper"

class HomepageControllerTest < ActionDispatch::IntegrationTest
  test "should get login" do
    get homepage_login_url
    assert_response :success
  end
end
