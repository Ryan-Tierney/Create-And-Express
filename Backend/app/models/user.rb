class User < ApplicationRecord
    has_secure_password 

    has_many :creations
    has_many :comments 

    validates :name, :username, presence: true 
    validates :username, uniqueness: true 
end
