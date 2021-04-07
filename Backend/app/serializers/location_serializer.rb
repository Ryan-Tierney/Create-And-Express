class LocationSerializer < ActiveModel::Serializer
    attributes :id, :city, :region, :country
  end