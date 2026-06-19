import React, { useEffect, useState } from "react";
import { LuCircleCheck } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { IoWarningOutline } from "react-icons/io5";

export const ToastItem = ({ notification, removeNotification }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [progressWidth, setProgressWidth] = useState("100%");

  const isSuccess = notification?.type === "success";

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      removeNotification(notification.id);
    }, 300);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsShowing(true);
      setTimeout(() => setProgressWidth("0%"), 50);
    });

    const leaveTimer = setTimeout(() => {
      setIsLeaving(true);
    }, notification?.duration);

    const unmountTimer = setTimeout(() => {
      removeNotification(notification.id);
    }, notification?.duration + 300);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(unmountTimer);
    };
  }, [notification.id, removeNotification, notification.duration]);

  return (
    <div
      className={`
        relative overflow-hidden bg-white rounded-lg shadow-xl pointer-events-auto
        min-w-[320px] max-w-md border border-gray-200
        transition-all duration-300 ease-in-out transform origin-top
        ${isLeaving ? "opacity-0 -translate-y-4 scale-95" : isShowing ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"}
      `}
    >
      <div className="flex gap-2 p-4">
        {isSuccess ? (
          <LuCircleCheck size={20} className="text-green-600" />
        ) : (
          <IoWarningOutline size={20} className="text-yellow-600" />
        )}
        <div className="text-sm font-medium text-brand-dark w-full">
          Pipelinne Analysis Complete
        </div>
      </div>
      <div className="text-sm font-medium text-brand-light whitespace-pre-wrap pl-11 pb-4">
        {notification.message}
      </div>
      <button
        onClick={handleClose}
        className="absolute top-4 right-3 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
      >
        <RxCross2 size={20} />
      </button>
      <div className="p-2 bg-gray-100 text-sm text-brand-light">
        This message will close in{" "}
        <span className="font-semibold">{notification?.duration / 1000}</span>{" "}
        sec.
      </div>
      <div
        className={`absolute bottom-0 left-0 h-1 ${isSuccess ? "bg-green-600" : "bg-yellow-600"}  transition-all ease-linear`}
        style={{
          width: progressWidth,
          transitionDuration: `${notification?.duration}ms`,
        }}
      />
    </div>
  );
};
