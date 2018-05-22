class Api::OrdersController < ApplicationController
  def create
    @order = Order.new(order_params)
    if @order.save
      render :create
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def index
    page = params[:page].to_i
    page ||= 1
    sort_col = params[:sort_col]
    sort_col ||= "ship_date"
    sort = params[:sort]
    sort ||= "ASC"
    @orders = Order.order("#{sort_col} #{sort}")
      .limit(25).offset(25 * (page - 1))
    @total_items = Order.count
    render :index
  end

  private

  def order_params
    params.require(:order).permit(:coffee_name, :method, :quantity,
                                  :unit, :priority, :ship_date, :notes)
  end

end
