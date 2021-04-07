class CreationSerializer < ActiveModel::Serializer 
    attributes :id, :image, :name, :date, :notes, :location, :category, :user
    belongs_to :user
    belongs_to :location
    belongs_to :category 
end 