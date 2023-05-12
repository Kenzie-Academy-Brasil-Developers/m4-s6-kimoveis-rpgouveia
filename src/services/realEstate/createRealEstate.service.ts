import { Repository } from "typeorm";
import { tRealEstateRequest } from "../../interfaces/realEstate.interfaces";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const createRealEstateService = async (
  realEstateData: tRealEstateRequest
): Promise<RealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOne({
    where: {
      id: realEstateData.categoryId,
    },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const checkIfAddressExists: Address | null = await addressRepository.findOne({
    where: {
      street: realEstateData.address.street,
      zipCode: realEstateData.address.zipCode,
      city: realEstateData.address.city,
      state: realEstateData.address.state,
    },
  });

  if (checkIfAddressExists) {
    throw new AppError("Address already exists", 409);
  }

  const addressData = realEstateData.address;
  const address: Address = addressRepository.create(addressData);
  await addressRepository.save(address);

  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateData,
    address: address,
    category: category,
  });
  await realEstateRepository.save(realEstate);

  return realEstate;
};

export default createRealEstateService;