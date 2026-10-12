const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) return false;

  if (updatedData.name) targetDevice.name = updatedData.name;

  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};
// Trong JavaScript, Falsy Value là những giá trị được xem như false khi sử dụng trong điều kiện if. Các giá trị Falsy phổ biến gồm false, 0, "", null, undefined và NaN.
