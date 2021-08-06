import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "../../redux/actions/productsActions";
import { hasCurrentOffer } from "../../utils/product";
import { getRemainingTime } from "../../utils/days";
import { sendQuestion } from "../../redux/actions/productsActions";
import { useToasts } from "react-toast-notifications";
import IState from "../../interfaces/IEstate";
import Question from "../../models/Question";

const useProductDetail = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const product = useSelector((state: IState) => state.selectedProduct);
  const questions = useSelector((state: IState) => state.questions);

  useEffect(() => {
    if (Object.keys(product).length) {
      dispatch(fetchQuestions(product.id));
      if (hasCurrentOffer(product)) {
        const { days, hours, minutes } = getRemainingTime(product.offer.expires_at);

        setRemainingDays(days);
        setRemainingHours(hours);
        setRemainingMinutes(minutes);
      }
    }
  }, [dispatch, product]);

  const orderedQuestions = questions.sort((a, b) => {
    return new Date(b.sent_at).getTime() - new Date(a.sent_at).getTime();
  });

  const handleSendQuestion = async (question: Question) => {
    try {
      await dispatch(sendQuestion(question));
      addToast("Message successfully sent", { appearance: "success" });
    } catch (error) {
      addToast("Something was wrong", { appearance: "error" });
    }
  };

  return {
    handleSendQuestion,
    orderedQuestions,
    product,
    remainingDays,
    remainingHours,
    remainingMinutes,
  };
};

export default useProductDetail;
