class LeaseSerializer < ActiveModel::Serializer
    attributes :id, :pdf, :base_rent, :nnn_expenses, :electric, :gas
  end