class LeasesController < ApplicationController
    

    def index
        leases = Lease.all
        render json: leases
    end

    def show
        lease = Lease.find(id: params[:id])
        render json: lease
    end
    
    def create
        request = Lease.create(pdf: params[:pdf])
        render json: request, status: :created
    end
end