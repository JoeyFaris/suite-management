class RequestSerializer < ActiveModel::Serializer
    attributes :id, :category, :comment, :users_id
  end