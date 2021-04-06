class Location < ApplicationRecord
    has_many :creations
    
    validates :city, :region, :country, presence: true 
end
