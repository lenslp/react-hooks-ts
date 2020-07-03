import { useCallback, useState } from "react";

const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const hide = useCallback(() => {
    setVisible(false);
  }, []);
  const show = useCallback(() => setVisible(true), []);

  return [visible, hide, show] as [boolean, () => void, () => void];
};

export default useModal;
