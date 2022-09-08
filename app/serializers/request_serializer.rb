class RequestSerializer < ActiveModel::Serializer
    attributes :id, :category, :comment, :user_id
    belongs_to :user
  end