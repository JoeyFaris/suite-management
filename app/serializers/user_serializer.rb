class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :password_digest
    has_many :requests
    has_many :leases

  end