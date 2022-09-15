class RequestSerializer < ActiveModel::Serializer
    attributes :id, :category, :comment, :users_id
    belongs_to :user
  end