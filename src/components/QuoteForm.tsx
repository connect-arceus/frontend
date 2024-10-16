import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/quoteInput"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

const QuoteForm = () => {
    return (
        <form className="my-8 flex flex-col gap-8">
                    <div>
                        <p className="text-3xl font-display mb-4">
                            <span className="text-secondary">PERSONAL</span>
                            <span className="text-primary"> INFORMATION</span>
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                type="text"
                                className={`lg:h-12 w-full`}
                                placeholder="Full Name"
                            />
                            <Input
                                type="text"
                                className={`lg:h-12 w-full`}
                                placeholder="Address"
                            />
                            <Input
                                type="text"
                                className={`lg:h-12 w-full`}
                                placeholder="Company"
                            />
                            <Input
                                type="text"
                                className={`lg:h-12 w-full`}
                                placeholder="City"
                            />
                            <Input
                                type="text"
                                className={`lg:h-12 w-full`}
                                placeholder="Email"
                            />
                            <Input
                                type="text"
                                className={`lg:h-12 w-full`}
                                placeholder="State/Province"
                            />
                            <Input
                                type="text"
                                className={`lg:h-12 w-full`}
                                placeholder="Phone"
                            />
                            <Input
                                type="text"
                                className={`lg:h-12 w-full`}
                                placeholder="Zip/Postal Code"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-3xl font-display mb-4">
                            <span className="text-secondary">QUOTE</span>
                            <span className="text-primary"> INFORMATION</span>
                        </p>
                        <div className="flex flex-col gap-4">
                            <p className="text-primary font-semibold text-2xl">
                                Origin
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Origin City"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Origin State / Province"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-xl">
                                    Origin Option
                                </p>
                                <div className="my-4 space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="no_loading_dock" />
                                        <label
                                            htmlFor="no_loading_dock"
                                            className="text-md tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            No Docking Station
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="no_origin_forklift" />
                                        <label
                                            htmlFor="no_origin_forklift"
                                            className="text-md tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            No Forklift
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="origin_tailgate_pickup_req" />
                                        <label
                                            htmlFor="origin_tailgate_pickup_req"
                                            className="text-md tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Tailgate Pickup Required
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-primary font-semibold text-2xl">
                                Destination
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Destination City"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Destination State / Province"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-xl">
                                    Destination Option
                                </p>
                                <div className="my-4 space-y-4">
                                    {/* 3 Destination Options */}
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="no_docking_station" />
                                        <label
                                            htmlFor="no_docking_station"
                                            className="text-md tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            No Docking Station
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="no_destination_forklift" />
                                        <label
                                            htmlFor="no_destination_forklift"
                                            className="text-md tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            No Forklift
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="destination_tailgate_pickup_req" />
                                        <label
                                            htmlFor="destination_tailgate_pickup_req"
                                            className="text-md tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Tailgate Pickup Required
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div>
                            <p className="font-semibold">Truck Load</p>
                            <div className="my-4 space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="truck_load" />
                                    <label
                                        htmlFor="truck_load"
                                        className="text-md tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        TL (Truck Load)
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="less_than_truckload" />
                                    <label
                                        htmlFor="less_than_truckload"
                                        className="text-md tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        LTL (Less than Truckload)
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="#Loose Item"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Service Required"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="#Loose Box"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Total Weight"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="# of Pallets"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Lbs/Kilos"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="# of Crates"
                                />
                                <RadioGroup className="flex items-center gap-8">
                                    <p className="font-semibold text-xl">Any Hazardous Materials?</p>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="yes" />
                                        <label htmlFor="yes">Yes</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="no" />
                                        <label htmlFor="no">No</label>
                                    </div>
                                </RadioGroup>
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Dimensions are in"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Shipment Pickup Date"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Expected Arrival Date"
                                />
                                <Input
                                    type="text"
                                    className={`lg:h-12 w-full`}
                                    placeholder="Total Value"
                                />
                                <Textarea
                                    className={`lg:h-12 w-full col-span-2 border-neutral-400 rounded`}
                                    placeholder="General Description of Goods / Special Instructions"
                                />
                            </div>
                        </div>
                    </div>
                    <Button className="w-80 h-14 rounded-md">
                        <ArrowRight className="mr-2" />
                        Submit
                    </Button>
                </form>
    )
}


export default QuoteForm