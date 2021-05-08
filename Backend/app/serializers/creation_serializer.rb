class CreationSerializer < ActiveModel::Serializer
    attributes :id, :image, :name, :public, :date, :notes, :location, :category, :user, :likes
    belongs_to :user
    belongs_to :location
    belongs_to :category
  end