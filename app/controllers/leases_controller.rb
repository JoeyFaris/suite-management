class LeasesController < ApplicationController
    

    def index
        leases = Lease.all
        render json: leases
    end

    def show
        lease = Lease.find_by(id: params[:id])
        render json: lease
    end
end