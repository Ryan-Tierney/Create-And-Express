class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :username, :userId
  # has_one :user
  # has_one :sighting
  def username
    object.user.username
  end

  def userId
    object.user.id
  end

 

end