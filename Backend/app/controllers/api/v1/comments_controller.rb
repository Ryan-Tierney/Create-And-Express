class Api::V1::CommentsController < ApplicationController
    before_action :set_comment, only: [:update, :destroy]

    def index
        comments = Comment.all 
        render json: comments, status: 200 
    end 

    def create 
        comment = current_user.comments.build(comment_params)
        if comment.save
            render json: comment, status: 200 
        else 
            error_resp = { 
                error: sighting.errors.full_messages.to_sentence 
            }
            render json: error_resp, status: :unprocessable_entity
        end 
    end 

    def update 
        creation = @comment.creation
        if @comment.update(content: params[:content])
            render json: creation, serializer: CreationShowSerializer, status: 200 
        else 
            render json: {error: 'Could not update'}
        end 
    end 

    def destroy 
        creation = @comment.creation
        if @comment.destroy 
            render json: creation, serializer: CreationShowSerializer, status: 200 
        else 
            render json: {error: 'Could not delete'}
        end 
    end 

    def set_comment
        @comment = Comment.find_by(id: params[:id])
    end 

    def comment_params
        params.permit(:creation_id, :content)
    end 
    
end
