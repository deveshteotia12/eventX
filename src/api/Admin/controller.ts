import { ObjectId } from 'mongodb';
import database from '../../shared/database';

export const eventReqHandler = async () => {
  try {
    const updatedData = await (
      await database()
    )
      .collection('eventReq')
      .find({ status: { $eq: '0' } })
      .toArray();

    return updatedData;
  } catch (error) {
    throw { code: 400, message: error.message };
  }
};
export const upcomingReqHandler = async () => {
  try {
    const updatedData = await (
      await database()
    )
      .collection('eventReq')
      .find({ status: { $eq: '1' } })
      .toArray();

    return updatedData;
  } catch (error) {
    throw { code: 400, message: error.message };
  }
};

export const handelAcceptReq = async ID => {
  try {
    const data = await (await database())
      .collection('eventReq')
      .findOneAndUpdate({ _id: new ObjectId(ID.ID) }, { $set: { status: '1' } });

    const updatedData = await (
      await database()
    )
      .collection('eventReq')
      .find({ status: { $eq: '0' } })
      .toArray();

    return updatedData;
  } catch (error) {
    throw { code: 400, message: error.message };
  }
};

export const handelrejectReq = async ID => {
  try {
    const data = await (await database())
      .collection('eventReq')
      .findOneAndUpdate({ _id: new ObjectId(ID.ID) }, { $set: { status: '2' } });
    const updatedData = await (
      await database()
    )
      .collection('eventReq')
      .find({ status: { $eq: '0' } })
      .toArray();
    return updatedData;
  } catch (error) {
    throw { code: 400, message: error.message };
  }
};

export const handelremoveReq = async ID => {
  try {
    const data = await (await database())
      .collection('eventReq')
      .findOneAndUpdate({ _id: new ObjectId(ID.ID) }, { $set: { status: '2' } });
    const updatedData = await (
      await database()
    )
      .collection('eventReq')
      .find({ status: { $eq: '1' } })
      .toArray();
    return updatedData;
  } catch (error) {
    throw { code: 400, message: error.message };
  }
};
