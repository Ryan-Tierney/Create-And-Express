class Location < ApplicationRecord
    has_many :creations
    
    validates :city, :country, presence: true 
end
