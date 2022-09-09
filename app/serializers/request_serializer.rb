class RequestSerializer < ActiveModel::Serializer
    attributes :id, :category, :comment
    belongs_to :user
  end