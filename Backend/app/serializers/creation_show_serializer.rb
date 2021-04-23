class CreationShowSerializer < ActiveModel::Serializer
    attributes :id, :image, :name, :public, :date, :notes, :location, :category, :username
    belongs_to :location
    belongs_to :category
    has_many :comments
  
    def username
      object.user.username
    end
  
    def comments
      object.comments.order("created_at ASC")
    end
  end