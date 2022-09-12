class UserSerializer < ActiveModel::Serializer
    attributes :id, :username
    has_many :requests
    has_many :leases
  end