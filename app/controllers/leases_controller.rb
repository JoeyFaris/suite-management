class LeasesController < ApplicationController
    

    def index
        leases = Lease.all
        render json: leases
    end

    def show
        lease = Lease.first
        render json: lease
    end
end