class Api::V1::CreationsController < ApplicationController
    before_action :set_creation, only: [:update, :destroy, :show]

    def index 
        creations = Creation.all 
        render json: creations, status: 200 
    end 

    def show 
        render json: @creation, serializer: CreationShowSerializer
    end 

    def create 
        creation = current_user.creations.build(creation_params)
        creation.category = Category.find_by(name: params[:category])
        creation.location = Location.find_or_create_by(city: params[:city], region: params[:region], country: params[:country])
        if creation.save 
            render json: creation, status: 200 
        else 
            error_resp = {
                error: creation.errors.full_messages.to_sentence
            }
            render json: error_resp, status: :unprocessable_entity
        end 
    end 

    def destroy 
        @creation.destroy 
        render json: (notice: 'Creation destroyed'}, status: 200
    end 

    private 

    def set_creation
        @creation = Creation.find_by(id: params[:id])
    end 

    def creation_params
        params.transform_keys(&:underscore).permit(
            :image, :name, :date, :notes
            )
    end 
end
