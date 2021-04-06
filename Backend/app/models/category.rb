class Category < ApplicationRecord
    has_many :creations 

    validates :name, presence: true 
end
