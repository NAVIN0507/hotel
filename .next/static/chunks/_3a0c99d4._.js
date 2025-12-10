(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/actions/users.actions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use server"
__turbopack_context__.s({
    "addBookingWithToken": (()=>addBookingWithToken),
    "addBookingWithoutToken": (()=>addBookingWithoutToken),
    "fetchAllRoomByID": (()=>fetchAllRoomByID),
    "fetchAllRoomCategories": (()=>fetchAllRoomCategories),
    "fetchUserDetails": (()=>fetchUserDetails),
    "forgotPassword": (()=>forgotPassword),
    "getActivites": (()=>getActivites),
    "getAdditionalActivites": (()=>getAdditionalActivites),
    "getAppDetails": (()=>getAppDetails),
    "getFoodMenu": (()=>getFoodMenu),
    "resetPassword": (()=>resetPassword),
    "userLogin": (()=>userLogin),
    "userRegister": (()=>userRegister)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionData__as__data$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs [app-client] (ecmascript) <export MotionData as data>");
;
;
const userRegister = async ({ name, email, password, phone, address })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://portal.brundhavangarden.com/api/auth/register", {
            name: name,
            email: email,
            phone: phone,
            address: address,
            password: password,
            password_confirmation: password
        }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        if (!data) {
            return {
                success: false,
                message: 'Regitration Canceled',
                data: null
            };
        }
        return {
            success: true,
            message: 'Registration SuccessFull',
            data: data
        };
    } catch (error) {
        return {
            success: false,
            message: 'Regitration Canceled',
            data: error
        };
    }
};
const userLogin = async (email, password)=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://portal.brundhavangarden.com/api/auth/login", {
            email: email,
            password: password
        }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        if (!data) {
            return {
                success: false,
                message: 'Login Failed',
                data: 'Login Failed'
            };
        }
        return {
            success: true,
            message: 'Login SuccessFull',
            data: data
        };
    } catch (error) {
        return {
            success: false,
            message: 'Login Failed',
            data: error.message
        };
    }
};
const fetchUserDetails = async (token)=>{
    if (!token || token === "undefined") {
        console.error("Invalid or missing token");
        return {
            success: false,
            message: "Token missing",
            data: null
        };
    }
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://portal.brundhavangarden.com/api/user/details", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {
            success: true,
            message: "User Details",
            data: data?.user ?? data
        };
    } catch (error) {
        console.error("Error fetching user details:", error);
        return {
            success: false,
            message: error.response?.data?.message || "Login failed",
            data: null
        };
    }
};
const forgotPassword = async (email)=>{
    if (!email) {
        return {
            success: false,
            message: "Email is Required",
            data: null
        };
    }
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://portal.brundhavangarden.com/api/auth/forgot-password", {
            email: email
        });
        if (!data) {
            return {
                success: false,
                message: "Not Found",
                data: null
            };
        }
        return {
            success: true,
            message: `Reset password is sent to ${email}`,
            data: data
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal Server Error",
            data: null
        };
    }
};
const resetPassword = async ({ email, token, password, confirmPassword })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://portal.brundhavangarden.com/api/auth/reset-password", {
            email: email,
            token: token,
            password: password,
            password_confirmation: confirmPassword
        });
        if (!data) {
            return {
                success: false,
                message: "Sorry Some thing went wrong",
                data: null
            };
        }
        return {
            success: true,
            message: "Password Changed",
            data: data
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
            data: null
        };
    }
};
const fetchAllRoomCategories = async ()=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://portal.brundhavangarden.com/api/room-categories");
        if (!data) {
            return {
                success: false,
                message: "Sorry Some thing went wrong",
                data: null
            };
        }
        return {
            success: true,
            message: "Recived Ok",
            data: data
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal Server Error",
            data: null
        };
    }
};
const fetchAllRoomByID = async (id)=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`https://portal.brundhavangarden.com/api/room-categories/${id}`);
        if (!data) {
            return {
                success: false,
                message: "Sorry some thing went wrong",
                data: null
            };
        }
        return {
            success: true,
            message: "",
            data: data
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
            data: null
        };
    }
};
const addBookingWithToken = async ({ token, room_categories_id, check_in, check_out, adult_count, child_count, special_food_menu, activities, extra_bed, fire_camp, jeep_safari, total })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://portal.brundhavangarden.com/api/room-booking", {
            token,
            room_categories_id,
            check_in,
            check_out,
            adult_count,
            child_count,
            special_food_menu,
            activities,
            extra_bed,
            fire_camp,
            jeep_safari,
            total
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        if (data?.errors) {
            return {
                success: false,
                message: "Sorry some thing went wrong",
                data: data?.errors
            };
        }
        return {
            success: true,
            message: "Booking Created SuccessFully",
            data: data
        };
    } catch (error) {
        return {
            success: false,
            message: `${error?.message}`,
            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionData__as__data$3e$__["data"]
        };
    }
};
const addBookingWithoutToken = async ({ room_categories_id, check_in, check_out, adult_count, child_count, special_food_menu, activities, extra_bed, fire_camp, jeep_safari, total, customer_data: { name, email, address, phone } })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://portal.brundhavangarden.com/api/room-booking", {
            room_categories_id,
            check_in,
            check_out,
            adult_count,
            child_count,
            special_food_menu,
            activities,
            extra_bed,
            fire_camp,
            jeep_safari,
            total,
            customer_data: {
                name,
                email,
                address,
                phone
            }
        }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        if (data?.errors) {
            return {
                success: false,
                message: "Sorry some thing went wrong",
                data: data?.errors
            };
        }
        return {
            success: true,
            message: "Booking Created successfully",
            data: data
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Internal server error",
            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionData__as__data$3e$__["data"]
        };
    }
};
const getFoodMenu = async ()=>{
    try {
        const { data: foodMenu } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://portal.brundhavangarden.com/api/services/food-menu");
        if (!foodMenu) {
            return {
                success: false,
                message: "Food Menu not found",
                data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionData__as__data$3e$__["data"]
            };
        }
        return {
            success: true,
            message: "Data Found",
            data: foodMenu
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionData__as__data$3e$__["data"]
        };
    }
};
const getActivites = async ()=>{
    try {
        const { data: activities } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://portal.brundhavangarden.com/api/services/activities");
        if (!activities) {
            return {
                success: false,
                message: "Food Menu not found",
                data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionData__as__data$3e$__["data"]
            };
        }
        return {
            success: true,
            message: "Data Found",
            data: activities
        };
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionData__as__data$3e$__["data"]
        };
    }
};
const getAppDetails = async ()=>{
    try {
        const { data: appDetails } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://portal.brundhavangarden.com/api/services/app-details");
        if (!appDetails) {
            return {
                success: false,
                message: "App details not found",
                data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionData__as__data$3e$__["data"]
            };
        }
        return {
            success: true,
            data: appDetails,
            message: "Successfully fetched app details"
        };
    } catch (error) {
        return {
            success: false,
            data: undefined,
            message: "Internal server error"
        };
    }
};
const getAdditionalActivites = async ()=>{
    try {
        const { data: appDetails } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://portal.brundhavangarden.com/api/services/additionalactivities");
        if (!appDetails) {
            return {
                success: false,
                message: "App details not found",
                data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionData__as__data$3e$__["data"]
            };
        }
        return {
            success: true,
            data: appDetails,
            message: "Successfully fetched app details"
        };
    } catch (error) {
        return {
            success: false,
            data: undefined,
            message: "Internal server error"
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Home/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/users.actions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Footer = ()=>{
    _s();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [appDetails, setAppDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            const updateWidth = {
                "Footer.useEffect.updateWidth": ()=>setWidth(window.innerWidth)
            }["Footer.useEffect.updateWidth"];
            updateWidth();
            window.addEventListener("resize", updateWidth);
            return ({
                "Footer.useEffect": ()=>window.removeEventListener("resize", updateWidth)
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    const fetchAppDetails = async ()=>{
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAppDetails"])();
        if (!data) return null;
        setAppDetails(data);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            fetchAppDetails();
        }
    }["Footer.useEffect"], []);
    if (!appDetails) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
            className: "size-4 animate-spin"
        }, void 0, false, {
            fileName: "[project]/components/Home/Footer.tsx",
            lineNumber: 46,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Home/Footer.tsx",
        lineNumber: 45,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-hidden leading-[0]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "block w-full h-[100px] ",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 112",
                    preserveAspectRatio: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,64 C80,16 180,16 260,56 C340,96 432,96 512,48 L512,112 L0,112 Z",
                            fill: "#2a2552"
                        }, void 0, false, {
                            fileName: "[project]/components/Home/Footer.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,64 C80,16 180,16 260,56 C340,96 432,96 512,48",
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "3",
                            opacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Home/Footer.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/Footer.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Home/Footer.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                id: "footer",
                className: "bg-[#2a2552] w-full h-full p-6 sm:p-10 flex flex-col text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-wrap md:flex-row items-start justify-between gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 flex-1 min-w-[250px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-mono text-2xl sm:text-3xl",
                                        children: "LOCATION"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.9375963497077!2d77.63294822937205!3d10.288953248223544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b075ea7b03954e5%3A0x2cc8b1d04c027abc!2sPannaikadu%20-%20Thandikudi%20Rd%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1758359844758!5m2!1sen!2sin",
                                        width: "100%",
                                        height: "150",
                                        className: "border-0 rounded-md",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Home/Footer.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 min-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-mono text-2xl sm:text-3xl uppercase",
                                        children: "Other Pages"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/shipping-policies",
                                                className: "w-fit",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm underline mt-2 hover:text-gray-200 transition",
                                                    children: "Shipping Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Home/Footer.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Home/Footer.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/terms-conditions",
                                                className: "w-fit",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm underline mt-2 hover:text-gray-200 transition",
                                                    children: "Terms & Conditions"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Home/Footer.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Home/Footer.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/refund-policy",
                                                className: "w-fit",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm underline mt-2 hover:text-gray-200 transition",
                                                    children: "Refund Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Home/Footer.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Home/Footer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy-policy",
                                                className: "w-fit",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm underline mt-2 hover:text-gray-200 transition",
                                                    children: "Privacy Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Home/Footer.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Home/Footer.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Home/Footer.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 flex-1 min-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-mono text-2xl sm:text-3xl",
                                        children: "CONTACT US"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-2",
                                        children: [
                                            "Call: +91 ",
                                            appDetails?.phone.slice(0, 5),
                                            " ",
                                            appDetails?.phone.slice(5, 10)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-2",
                                        children: [
                                            "Write: ",
                                            appDetails?.email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-2",
                                        children: "Find Us: 3/347A Pannaikadu Main Road, Thandikudi, Dindigul"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Home/Footer.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 flex-1 min-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-mono text-2xl sm:text-3xl",
                                        children: "FOLLOW US"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: appDetails?.whatsapp_link || "",
                                                className: "w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/images/whatsapp-ogo.png",
                                                    alt: "whatsapp",
                                                    width: 30,
                                                    height: 30,
                                                    className: "rounded-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Home/Footer.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Home/Footer.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: appDetails?.instagram_link || "",
                                                className: "w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/images/instagram.png",
                                                    alt: "instagram",
                                                    width: 28,
                                                    height: 28,
                                                    className: "rounded-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Home/Footer.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Home/Footer.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Home/Footer.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Home/Footer.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px bg-white/20 my-8"
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Footer.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-sm sm:text-base",
                                children: [
                                    "Copyright © 2025",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "font-semibold underline",
                                        children: "BRUNDHAVAN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "| All Rights Reserved"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Home/Footer.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-sm sm:text-base",
                                children: [
                                    "Made by",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://solvixsoftworks.com/",
                                        target: "_blank",
                                        className: "font-semibold underline",
                                        children: "SolvixSoftworks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/Footer.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Home/Footer.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Home/Footer.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/Footer.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(Footer, "lSOMYQquatAHIRZuPvVmpvwHQzk=");
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Room/Hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/keen-slider/react.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Hero = ({ pictures, video })=>{
    _s();
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sliderRef, slider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"])({
        loop: true,
        slides: {
            perView: 1
        },
        initial: 0,
        slideChanged (s) {
            setCurrentSlide(s.track.details.rel);
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!slider.current) return;
            const startAutoplay = {
                "Hero.useEffect.startAutoplay": ()=>{
                    timer.current = setInterval({
                        "Hero.useEffect.startAutoplay": ()=>{
                            slider.current?.next();
                        }
                    }["Hero.useEffect.startAutoplay"], 5000);
                }
            }["Hero.useEffect.startAutoplay"];
            const stopAutoplay = {
                "Hero.useEffect.stopAutoplay": ()=>{
                    if (timer.current) {
                        clearInterval(timer.current);
                        timer.current = null;
                    }
                }
            }["Hero.useEffect.stopAutoplay"];
            // Start autoplay
            startAutoplay();
            // Pause autoplay on hover
            const sliderElement = slider.current.container;
            sliderElement.addEventListener('mouseenter', stopAutoplay);
            sliderElement.addEventListener('mouseleave', startAutoplay);
            return ({
                "Hero.useEffect": ()=>{
                    stopAutoplay();
                    sliderElement.removeEventListener('mouseenter', stopAutoplay);
                    sliderElement.removeEventListener('mouseleave', startAutoplay);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        slider
    ]);
    const goToPrevious = ()=>{
        slider.current?.prev();
    };
    const goToNext = ()=>{
        slider.current?.next();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-screen p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: sliderRef,
                        className: "keen-slider rounded-2xl overflow-hidden",
                        children: pictures.map((pic, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "keen-slider__slide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: pic,
                                    alt: `hero-image-${index}`,
                                    width: 1500,
                                    height: 600,
                                    quality: 100,
                                    placeholder: "blur",
                                    blurDataURL: "/placeholder-blur.jpg",
                                    className: "rounded-2xl w-full h-[600px] object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/Room/Hero.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/Room/Hero.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Room/Hero.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevious,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10",
                        "aria-label": "Previous image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/components/Room/Hero.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Room/Hero.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Room/Hero.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNext,
                        className: "absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10",
                        "aria-label": "Next image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/components/Room/Hero.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Room/Hero.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Room/Hero.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
                        children: pictures.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>slider.current?.moveToIdx(index),
                                className: `w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-110' : 'bg-white/60 hover:bg-white/80'}`,
                                "aria-label": `Go to slide ${index + 1}`
                            }, index, false, {
                                fileName: "[project]/components/Room/Hero.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Room/Hero.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Room/Hero.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Room/Hero.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Room/Hero.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
};
_s(Hero, "WzcweU6B2tx49NK9nYJdNf9OEr0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"]
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Room/NavBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/users.actions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Navbar = ()=>{
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const rawToken = localStorage.getItem("user_token");
            const token = rawToken?.replace(/^"(.*)"$/, "$1");
            if (token) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserDetails"])(token).then({
                    "Navbar.useEffect": (res)=>{
                        if (res.success) {
                            setUser(res.data);
                        }
                    }
                }["Navbar.useEffect"]);
            }
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 50)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navLinks = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Rooms",
            href: "/allrooms"
        },
        {
            label: "About Us",
            href: "/aboutus"
        },
        {
            label: "Contact",
            href: "/contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300  -mt-4 ${scrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-white/40 backdrop-blur-lg"} rounded-full border border-white/20 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%]`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-5 sm:px-8 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/images/Brundhavan_word_logo.png",
                                alt: "Brundhavan Garden",
                                width: 35,
                                height: 35,
                                className: "rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/components/Room/NavBar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif text-[#011D38] text-lg font-semibold tracking-wide",
                                children: "Brundhavan"
                            }, void 0, false, {
                                fileName: "[project]/components/Room/NavBar.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/NavBar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-6",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: "text-[#011D38] text-sm uppercase tracking-wider font-medium hover:text-[#D4AF37] transition-colors duration-300",
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/components/Room/NavBar.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Room/NavBar.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/sign-in",
                            className: "bg-[#D4AF37] hover:bg-[#bfa031] text-white text-sm px-5 py-2 rounded-full uppercase tracking-wider font-semibold transition-all duration-300",
                            children: !user ? "Sign In/Up" : user.name
                        }, void 0, false, {
                            fileName: "[project]/components/Room/NavBar.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Room/NavBar.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMenuOpen(!menuOpen),
                        className: "md:hidden text-[#011D38]",
                        children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/components/Room/NavBar.tsx",
                            lineNumber: 88,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/components/Room/NavBar.tsx",
                            lineNumber: 88,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Room/NavBar.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Room/NavBar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden flex flex-col items-center gap-4 pb-6 bg-white/95 backdrop-blur-lg rounded-b-3xl border-t border-gray-200",
                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        onClick: ()=>setMenuOpen(false),
                        className: "text-[#011D38] text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors duration-300",
                        children: link.label
                    }, link.label, false, {
                        fileName: "[project]/components/Room/NavBar.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Room/NavBar.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Room/NavBar.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_s(Navbar, "zG2j25lK47GxBoJheL0amjJACnw=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Room/OtherRooms.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dot.js [app-client] (ecmascript) <export default as Dot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const OtherRooms = ({ roomProps, currRoomId })=>{
    // Filter out the current room
    const otherRooms = roomProps.filter((room)=>room.id !== currRoomId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-6 md:px-10 mt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-mono text-4xl text-[#45443F]",
                children: "OTHER ROOMS"
            }, void 0, false, {
                fileName: "[project]/components/Room/OtherRooms.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6 mt-10",
                children: otherRooms.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/room/${room.id}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 group transition-transform hover:scale-[1.02]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-xl shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: room.pictures[0],
                                            alt: room.name,
                                            width: 450,
                                            height: 350,
                                            className: "w-full h-[350px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Room/OtherRooms.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -mt-10 ml-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-white text-center text-xl -mt-3",
                                                children: [
                                                    "STARTS FROM ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-5xl",
                                                        children: room.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Room/OtherRooms.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 87
                                                    }, this),
                                                    "/PER NIGHT"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/OtherRooms.tsx",
                                                lineNumber: 48,
                                                columnNumber: 22
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Room/OtherRooms.tsx",
                                            lineNumber: 47,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Room/OtherRooms.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-3 font-mono text-2xl text-[#45443F]",
                                    children: room.name
                                }, void 0, false, {
                                    fileName: "[project]/components/Room/OtherRooms.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#5C5C5C] flex items-center gap-1 text-sm md:text-base",
                                    children: [
                                        room.square_ft,
                                        " m² ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__["Dot"], {}, void 0, false, {
                                            fileName: "[project]/components/Room/OtherRooms.tsx",
                                            lineNumber: 57,
                                            columnNumber: 35
                                        }, this),
                                        " ",
                                        room.capability,
                                        " Person",
                                        room.capability > 1 ? "s" : "",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__["Dot"], {}, void 0, false, {
                                            fileName: "[project]/components/Room/OtherRooms.tsx",
                                            lineNumber: 58,
                                            columnNumber: 48
                                        }, this),
                                        " ",
                                        room.beds,
                                        " Bed",
                                        room.beds > 1 ? "s" : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Room/OtherRooms.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Room/OtherRooms.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, room.id, false, {
                        fileName: "[project]/components/Room/OtherRooms.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Room/OtherRooms.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Room/OtherRooms.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_c = OtherRooms;
const __TURBOPACK__default__export__ = OtherRooms;
var _c;
__turbopack_context__.k.register(_c, "OtherRooms");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Room/MobileRoomInfo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed-double.js [app-client] (ecmascript) <export default as BedDouble>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dot.js [app-client] (ecmascript) <export default as Dot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inspection$2d$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InspectionPanel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inspection-panel.js [app-client] (ecmascript) <export default as InspectionPanel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/users.actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const MobileRoomInfo = ({ id })=>{
    _s();
    const [roomDetails, setroomDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userToken, setuserToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [bookingDetails, setBookingDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        token: "",
        room_categories_id: Number(id),
        check_in: "",
        check_out: "",
        adult_count: 0,
        child_count: 0,
        special_food_menu: [
            1
        ],
        activities: [
            1
        ],
        extra_bed: false,
        fire_camp: false,
        jeep_safari: false,
        total: 0
    });
    const [bookingDetailsWithoutToken, setbookingDetailsWithoutToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        room_categories_id: Number(id),
        check_in: "",
        check_out: "",
        adult_count: 0,
        child_count: 0,
        special_food_menu: [],
        activities: [],
        extra_bed: false,
        fire_camp: false,
        jeep_safari: false,
        total: 0,
        customer_data: {
            name: "",
            email: "",
            address: "",
            phone: ""
        }
    });
    const [addAct, setAddAct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchAddAct = async ()=>{
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAdditionalActivites"])();
        if (!data) return null;
        setAddAct(data);
    };
    // Format datetime from "YYYY-MM-DDTHH:mm" to "YYYY-MM-DD HH:mm:ss"
    function formatDateTime(input) {
        if (!input) return "";
        return input.replace("T", " ") + ":00";
    }
    // Calculate total price: (base price + selected extras) * number of nights
    const totalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileRoomInfo.useMemo[totalPrice]": ()=>{
            if (!roomDetails || !addAct) return 0;
            const basePrice = Number(roomDetails.price) || 0;
            // Calculate extras price from addAct based on selected checkboxes
            let extrasPrice = 0;
            // helper to normalize keys like 'Jeep Safari' -> 'jeep_safari'
            const normalize = {
                "MobileRoomInfo.useMemo[totalPrice].normalize": (s)=>s?.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "")
            }["MobileRoomInfo.useMemo[totalPrice].normalize"];
            Object.entries(addAct).forEach({
                "MobileRoomInfo.useMemo[totalPrice]": ([key, value])=>{
                    const prop = normalize(key);
                    if (bookingDetails[prop] === true) {
                        extrasPrice += Number(value) || 0;
                    }
                }
            }["MobileRoomInfo.useMemo[totalPrice]"]);
            // Compute number of nights (at least 1)
            let nights = 1;
            if (bookingDetails.check_in && bookingDetails.check_out) {
                const inDate = new Date(bookingDetails.check_in);
                const outDate = new Date(bookingDetails.check_out);
                const diff = outDate.getTime() - inDate.getTime();
                if (diff > 0) {
                    nights = Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
                }
            }
            return (basePrice + extrasPrice) * nights;
        }
    }["MobileRoomInfo.useMemo[totalPrice]"], [
        bookingDetails,
        roomDetails,
        addAct
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileRoomInfo.useEffect": ()=>{
            const rawToken = localStorage.getItem("user_token");
            const authtoken = rawToken?.replace(/^"(.*)"$/, "$1") || null;
            setuserToken(authtoken ?? "");
            const fetchRoom = {
                "MobileRoomInfo.useEffect.fetchRoom": async ()=>{
                    const room = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllRoomByID"])(id);
                    if (room.success === false || !room.data) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/");
                    }
                    setroomDetails(room.data);
                    setBookingDetails({
                        "MobileRoomInfo.useEffect.fetchRoom": (prev)=>({
                                ...prev,
                                token: authtoken || "",
                                room_categories_id: room.data?.id ?? null
                            })
                    }["MobileRoomInfo.useEffect.fetchRoom"]);
                }
            }["MobileRoomInfo.useEffect.fetchRoom"];
            fetchRoom();
            fetchAddAct();
        }
    }["MobileRoomInfo.useEffect"], [
        id
    ]);
    const [foodMenu, setfoodMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileRoomInfo.useEffect": ()=>{
            const wantFoodMenu = {
                "MobileRoomInfo.useEffect.wantFoodMenu": async ()=>{
                    const foodMenu = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFoodMenu"])();
                    if (!foodMenu) return null;
                    setfoodMenu(foodMenu.data);
                }
            }["MobileRoomInfo.useEffect.wantFoodMenu"];
            wantFoodMenu();
        }
    }["MobileRoomInfo.useEffect"], []);
    const [activites, setactivites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileRoomInfo.useEffect": ()=>{
            const wantActivites = {
                "MobileRoomInfo.useEffect.wantActivites": async ()=>{
                    const activites = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivites"])();
                    if (!activites) return null;
                    setactivites(activites.data);
                }
            }["MobileRoomInfo.useEffect.wantActivites"];
            wantActivites();
        }
    }["MobileRoomInfo.useEffect"], []);
    const aboutRawText = roomDetails?.about_stay || "";
    // Step 1: Remove HTML tags
    let cleanText = aboutRawText.replace(/<[^>]*>/g, "");
    // Step 2: Split using &nbsp; as divider (each becomes a new bullet)
    const sentences = cleanText.split(/&nbsp;+/g) // split by one or more &nbsp;
    .map((s)=>s.trim()) // remove extra spaces
    .filter(Boolean); // remove empty entries
    const checkInRules = roomDetails?.check_in_rules;
    const checkInruleList = checkInRules?.match(/<li>(.*?)<\/li>/g)?.map((item)=>item.replace(/<\/?li>/g, ""));
    const checkoutRules = roomDetails?.check_out_rules;
    const checkOutruleList = checkoutRules?.match(/<li>(.*?)<\/li>/g)?.map((item)=>item.replace(/<\/?li>/g, ""));
    const onClick = async ()=>{
        try {
            // Validation checks
            const totalGuests = bookingDetails.adult_count + bookingDetails.child_count;
            // Check if room capacity is exceeded
            if (roomDetails && totalGuests > roomDetails.capability) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Room capacity exceeded! Maximum ${roomDetails.capability} guests allowed. You selected ${totalGuests} guests.`, {
                    position: "top-center"
                });
                return;
            }
            // Check if at least one guest is selected
            if (totalGuests === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select at least one guest (adult or child)", {
                    position: "top-center"
                });
                return;
            }
            // Check if dates are selected
            if (!bookingDetails.check_in || !bookingDetails.check_out) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select check-in and check-out dates", {
                    position: "top-center"
                });
                return;
            }
            // Check if check-out is after check-in
            const checkIn = new Date(bookingDetails.check_in);
            const checkOut = new Date(bookingDetails.check_out);
            if (checkOut <= checkIn) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Check-out date must be after check-in date", {
                    position: "top-center"
                });
                return;
            }
            // Check if guest details are provided (for non-logged-in users)
            if (!userToken) {
                const { name, email, phone, address } = bookingDetailsWithoutToken.customer_data;
                if (!name || !email || !phone || !address) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please fill in all customer details", {
                        position: "top-center"
                    });
                    return;
                }
                // Basic email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid email address", {
                        position: "top-center"
                    });
                    return;
                }
                // Basic phone validation (10 digits)
                const phoneRegex = /^\d{10}$/;
                if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid 10-digit phone number", {
                        position: "top-center"
                    });
                    return;
                }
            }
            if (userToken) {
                // Logged-in flow
                const formattedBookingDetails = {
                    ...bookingDetails,
                    check_in: formatDateTime(bookingDetails.check_in),
                    check_out: formatDateTime(bookingDetails.check_out),
                    total: totalPrice,
                    token: userToken
                };
                const addBooking = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBookingWithToken"])(formattedBookingDetails);
                if (addBooking.success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Booking successful!", {
                        position: "top-center"
                    });
                    router.push(addBooking.data.redirect_url);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(addBooking.message || "Error in booking", {
                        position: "top-center"
                    });
                    console.error("Error in token-based booking");
                }
            } else {
                // Guest flow
                const formattedBookingDetailsWithoutToken = {
                    ...bookingDetailsWithoutToken,
                    check_in: formatDateTime(bookingDetails.check_in),
                    check_out: formatDateTime(bookingDetails.check_out),
                    child_count: bookingDetails.child_count,
                    adult_count: bookingDetails.adult_count,
                    extra_bed: bookingDetails.extra_bed,
                    fire_camp: bookingDetails.fire_camp,
                    jeep_safari: bookingDetails.jeep_safari,
                    special_food_menu: bookingDetails.special_food_menu,
                    activities: bookingDetails.activities,
                    total: totalPrice
                };
                const addBooking = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBookingWithoutToken"])(formattedBookingDetailsWithoutToken);
                if (addBooking.success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(addBooking.message, {
                        position: "top-center"
                    });
                    router.push(addBooking.data.redirect_url);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(addBooking.message, {
                        position: "top-center"
                    });
                }
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unexpected error occurred. Please try again.", {
                position: "top-center"
            });
            console.error("Booking error:", error);
        }
    };
    // Function to format date for display
    const formatDateForDisplay = (dateString)=>{
        if (!dateString) return "";
        const date = new Date(dateString);
        const options = {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
        return date.toLocaleDateString("en-US", options);
    };
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileRoomInfo.useEffect": ()=>{
            const updateWidth = {
                "MobileRoomInfo.useEffect.updateWidth": ()=>setWidth(window.innerWidth)
            }["MobileRoomInfo.useEffect.updateWidth"];
            updateWidth(); // Get initial width
            window.addEventListener("resize", updateWidth); // Listen for resize
            return ({
                "MobileRoomInfo.useEffect": ()=>window.removeEventListener("resize", updateWidth)
            })["MobileRoomInfo.useEffect"];
        }
    }["MobileRoomInfo.useEffect"], []);
    if (!addAct) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "p-5 flex flex-col gap-4 -mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4 p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1 items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inspection$2d$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InspectionPanel$3e$__["InspectionPanel"], {
                                color: "#5C5C5C",
                                width: 40,
                                height: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 363,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#5C5C5C]",
                                children: [
                                    roomDetails?.square_ft,
                                    "M2"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 364,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                        lineNumber: 362,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1 items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"], {
                                color: "#5C5C5C",
                                width: 40,
                                height: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 367,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#5C5C5C]",
                                children: [
                                    roomDetails?.capability,
                                    " PERSON"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 368,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                        lineNumber: 366,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1 items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__["BedDouble"], {
                                color: "#5C5C5C",
                                width: 40,
                                height: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 371,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#5C5C5C]",
                                children: [
                                    roomDetails?.beds,
                                    " BEDS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 372,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                        lineNumber: 370,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[#5C5C5C]",
                        children: [
                            "HOME / ROOMS / ",
                            roomDetails?.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                        lineNumber: 376,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-mono text-[#45443F]",
                        children: roomDetails?.name
                    }, void 0, false, {
                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                        lineNumber: 377,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col gap-4 h-fit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-fit rounded-lg p-7 bg-[#011D38]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-white text-center text-xl -mt-3",
                            children: [
                                "STARTS FROM ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-5xl",
                                    children: roomDetails?.price
                                }, void 0, false, {
                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                    lineNumber: 384,
                                    columnNumber: 33
                                }, this),
                                "/PER NIGHT"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                            lineNumber: 383,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                        lineNumber: 382,
                        columnNumber: 17
                    }, this),
                    !userToken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-fit rounded-lg p-6 bg-[#011D38] pb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-mono text-2xl text-white",
                                children: "ENTER YOUR DETAILS"
                            }, void 0, false, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 389,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5] text-sm",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 393,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: bookingDetailsWithoutToken.customer_data.name,
                                        onChange: (e)=>setbookingDetailsWithoutToken((prev)=>({
                                                    ...prev,
                                                    customer_data: {
                                                        ...prev.customer_data,
                                                        name: e.target.value
                                                    }
                                                })),
                                        placeholder: "Enter your Name",
                                        className: "text-white mb-2 bg-transparent outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 394,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 392,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5] text-sm",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 413,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: bookingDetailsWithoutToken.customer_data.email,
                                        onChange: (e)=>setbookingDetailsWithoutToken((prev)=>({
                                                    ...prev,
                                                    customer_data: {
                                                        ...prev.customer_data,
                                                        email: e.target.value
                                                    }
                                                })),
                                        placeholder: "Enter your E-Mail",
                                        className: "text-white mb-2 bg-transparent outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 414,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 412,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5] text-sm",
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 433,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: bookingDetailsWithoutToken.customer_data.address,
                                        onChange: (e)=>setbookingDetailsWithoutToken((prev)=>({
                                                    ...prev,
                                                    customer_data: {
                                                        ...prev.customer_data,
                                                        address: e.target.value
                                                    }
                                                })),
                                        placeholder: "Enter your Address",
                                        className: "text-white mb-2 bg-transparent outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 434,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 432,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5] text-sm",
                                        children: "Phone"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 453,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: bookingDetailsWithoutToken.customer_data.phone,
                                        onChange: (e)=>setbookingDetailsWithoutToken((prev)=>({
                                                    ...prev,
                                                    customer_data: {
                                                        ...prev.customer_data,
                                                        phone: e.target.value
                                                    }
                                                })),
                                        placeholder: "Enter your Phone Number",
                                        className: "text-white mb-2 bg-transparent outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 454,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 452,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                        lineNumber: 388,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-fit rounded-lg p-6 bg-[#011D38] pb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-mono text-2xl text-white",
                                children: "BOOK THIS ROOM"
                            }, void 0, false, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 475,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5] text-sm font-medium mb-3 block",
                                        children: "CHECK IN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 479,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "h-5 w-5 text-[#AA9061] group-hover:text-[#C5C5C5] transition-colors duration-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 481,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "datetime-local",
                                                value: bookingDetails.check_in,
                                                onChange: (e)=>setBookingDetails({
                                                        ...bookingDetails,
                                                        check_in: e.target.value
                                                    }),
                                                className: "w-full pl-10 pr-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061] focus:border-transparent transition-all duration-200 hover:border-[#AA9061] shadow-inner",
                                                style: {
                                                    colorScheme: 'dark'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 484,
                                                columnNumber: 23
                                            }, this),
                                            bookingDetails.check_in && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 pl-3 text-xs text-[#AA9061] font-medium",
                                                children: formatDateForDisplay(bookingDetails.check_in)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 496,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 480,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 478,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5] text-sm font-medium mb-3 block",
                                        children: "CHECK OUT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 505,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "h-5 w-5 text-[#AA9061] group-hover:text-[#C5C5C5] transition-colors duration-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 507,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "datetime-local",
                                                value: bookingDetails.check_out,
                                                onChange: (e)=>setBookingDetails({
                                                        ...bookingDetails,
                                                        check_out: e.target.value
                                                    }),
                                                className: "w-full pl-10 pr-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061] focus:border-transparent transition-all duration-200 hover:border-[#AA9061] shadow-inner",
                                                style: {
                                                    colorScheme: 'dark'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 510,
                                                columnNumber: 23
                                            }, this),
                                            bookingDetails.check_out && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 pl-3 text-xs text-[#AA9061] font-medium",
                                                children: formatDateForDisplay(bookingDetails.check_out)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 522,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 506,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 504,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 mt-6 border-b border-[#D0D0D0] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5]",
                                        children: "ADULTS COUNT (18+)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 531,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        value: bookingDetails.adult_count,
                                        onChange: (e)=>setBookingDetails({
                                                ...bookingDetails,
                                                adult_count: Number(e.target.value)
                                            }),
                                        className: "text-white mb-2 bg-transparent outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 532,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 530,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5]",
                                        children: "CHILDREN COUNT (0-17)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 545,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        value: bookingDetails.child_count,
                                        onChange: (e)=>setBookingDetails({
                                                ...bookingDetails,
                                                child_count: Number(e.target.value)
                                            }),
                                        className: "text-white mb-2 bg-transparent outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 546,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 544,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                        lineNumber: 474,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-fit rounded-lg p-6 bg-[#011D38]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-mono text-2xl text-white",
                                children: "ADD EXTRA"
                            }, void 0, false, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 560,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5]",
                                        children: "SPECIAL FOOD MENU"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 565,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: bookingDetails.special_food_menu[0] ?? "",
                                        onChange: (e)=>setBookingDetails({
                                                ...bookingDetails,
                                                special_food_menu: [
                                                    Number(e.target.value)
                                                ]
                                            }),
                                        className: "text-white mb-2 bg-transparent outline-none",
                                        children: foodMenu && Object.entries(foodMenu).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: key,
                                                className: "text-black",
                                                children: value
                                            }, key, false, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 578,
                                                columnNumber: 27
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 566,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 564,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 mt-4 border-b border-[#D0D0D0] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[#C5C5C5]",
                                        children: "ACTIVITIES & GAMES"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 587,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: bookingDetails.activities[0] ?? "",
                                        onChange: (e)=>setBookingDetails({
                                                ...bookingDetails,
                                                activities: [
                                                    Number(e.target.value)
                                                ]
                                            }),
                                        className: "text-white mb-2 bg-transparent outline-none",
                                        children: activites && Object.entries(activites).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: key,
                                                className: "text-black",
                                                children: value
                                            }, key, false, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 600,
                                                columnNumber: 27
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 588,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 586,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 mt-7",
                                children: Object.entries(addAct).filter(([key])=>{
                                    const normalize = (s)=>s?.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
                                    const roomServiceNames = roomDetails?.services?.map((s)=>normalize(s.service_name)) || [];
                                    return roomServiceNames.includes(normalize(key));
                                }).map(([key, value], idx)=>{
                                    const propName = key.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: Boolean(bookingDetails[propName]),
                                                        onChange: (e)=>{
                                                            setBookingDetails((prev)=>({
                                                                    ...prev,
                                                                    [propName]: e.target.checked
                                                                }));
                                                        },
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[#C5C5C5] capitalize",
                                                        children: key.replace(/_/g, ' ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 622,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#C5C5C5]",
                                                children: [
                                                    "₹ ",
                                                    value
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                lineNumber: 637,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 621,
                                        columnNumber: 7
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 609,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full p-1 h-1 border-b border-[#D0D0D0] mt-3"
                            }, void 0, false, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 643,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white",
                                        children: "TOTAL"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 645,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#C5C5C5]",
                                        children: [
                                            "₹ ",
                                            totalPrice
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 646,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 644,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full p-5 bg-[#AA9061] h-20 rounded-xl text-white mt-4",
                                onClick: onClick,
                                children: "BOOK NOW"
                            }, void 0, false, {
                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                lineNumber: 650,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                        lineNumber: 559,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                lineNumber: 380,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5 mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12/12 p-7 rounded-lg h-full border border-[#D7D7D7] flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-mono text-4xl uppercase text-[#45443F]",
                                    children: "ABOUT STAY"
                                }, void 0, false, {
                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                    lineNumber: 659,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc pl-6 space-y-2 text-gray-700 leading-relaxed",
                                    children: sentences.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: item
                                        }, index, false, {
                                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                            lineNumber: 662,
                                            columnNumber: 5
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                    lineNumber: 660,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                            lineNumber: 658,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full mt-10 p-1 h-1 border-b border-[#D7D7D7]"
                        }, void 0, false, {
                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                            lineNumber: 666,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-mono text-4xl uppercase text-[#45443F]",
                                    children: "services & AMENITIES"
                                }, void 0, false, {
                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                    lineNumber: 668,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-5 mt-10",
                                    children: roomDetails?.services.length !== 0 ? roomDetails?.services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-7 rounded-lg bg-[#F6F5F5] flex gap-3 text-black text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: service.icon_pic,
                                                    alt: "services",
                                                    width: 20,
                                                    height: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 33
                                                }, this),
                                                service.service_name
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                            lineNumber: 671,
                                            columnNumber: 31
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-7 rounded-lg bg-[#F6F5F5] flex gap-3 text-black text-md items-center justify-center",
                                        children: "No services availabel for this Room."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                        lineNumber: 681,
                                        columnNumber: 31
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                    lineNumber: 669,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                            lineNumber: 667,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full mt-10 p-1 h-1 border-b border-[#D7D7D7]"
                        }, void 0, false, {
                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                            lineNumber: 687,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-mono text-4xl uppercase text-[#45443F]",
                                    children: "ROOM RULES"
                                }, void 0, false, {
                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                    lineNumber: 689,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex max-sm:flex-col gap-30 max-sm:gap-10 mt-7 pl-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[#3A3A3A]",
                                                    children: "Check In"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 31
                                                }, this),
                                                checkInruleList?.map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "flex gap-1 text-[#3A3A3A]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__["Dot"], {}, void 0, false, {
                                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                                lineNumber: 694,
                                                                columnNumber: 82
                                                            }, this),
                                                            rule
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 33
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                            lineNumber: 691,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[#3A3A3A]",
                                                    children: "Check Out"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 31
                                                }, this),
                                                checkOutruleList?.map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "flex gap-1 text-[#3A3A3A]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__["Dot"], {}, void 0, false, {
                                                                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                                lineNumber: 700,
                                                                columnNumber: 82
                                                            }, this),
                                                            rule
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 33
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                            lineNumber: 697,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                                    lineNumber: 690,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                            lineNumber: 688,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                    lineNumber: 657,
                    columnNumber: 23
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Room/MobileRoomInfo.tsx",
                lineNumber: 656,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Room/MobileRoomInfo.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, this);
};
_s(MobileRoomInfo, "PRoh0zv99ieNdhuZK0BWt/poGVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MobileRoomInfo;
const __TURBOPACK__default__export__ = MobileRoomInfo;
var _c;
__turbopack_context__.k.register(_c, "MobileRoomInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Room/RoomInfo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/users.actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed-double.js [app-client] (ecmascript) <export default as BedDouble>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dot.js [app-client] (ecmascript) <export default as Dot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inspection$2d$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InspectionPanel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inspection-panel.js [app-client] (ecmascript) <export default as InspectionPanel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Room$2f$MobileRoomInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Room/MobileRoomInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const RoomInfo = ({ id })=>{
    _s();
    const [roomDetails, setroomDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userToken, setuserToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [bookingDetails, setBookingDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        token: "",
        room_categories_id: Number(id),
        check_in: "",
        check_out: "",
        adult_count: 0,
        child_count: 0,
        special_food_menu: [
            1
        ],
        activities: [
            1
        ],
        extra_bed: false,
        fire_camp: false,
        jeep_safari: false,
        total: 0
    });
    const [bookingDetailsWithoutToken, setbookingDetailsWithoutToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        room_categories_id: Number(id),
        check_in: "",
        check_out: "",
        adult_count: 0,
        child_count: 0,
        special_food_menu: [],
        activities: [],
        extra_bed: false,
        fire_camp: false,
        jeep_safari: false,
        total: 0,
        customer_data: {
            name: "",
            email: "",
            address: "",
            phone: ""
        }
    });
    const [addAct, setAddAct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchAddAct = async ()=>{
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAdditionalActivites"])();
        if (!data) return null;
        setAddAct(data);
    };
    function formatDateTime(input) {
        if (!input) return "";
        return input.replace("T", " ") + ":00";
    }
    // Calculate number of nights
    const numberOfNights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RoomInfo.useMemo[numberOfNights]": ()=>{
            if (!bookingDetails.check_in || !bookingDetails.check_out) return 1;
            const inDate = new Date(bookingDetails.check_in);
            const outDate = new Date(bookingDetails.check_out);
            const diff = outDate.getTime() - inDate.getTime();
            if (diff > 0) {
                return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
            }
            return 1;
        }
    }["RoomInfo.useMemo[numberOfNights]"], [
        bookingDetails.check_in,
        bookingDetails.check_out
    ]);
    // Calculate total price: (base price + selected extras) * number of nights
    const totalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RoomInfo.useMemo[totalPrice]": ()=>{
            if (!roomDetails || !addAct) return 0;
            const basePrice = Number(roomDetails.price) || 0;
            // Calculate extras price from addAct based on selected checkboxes
            let extrasPrice = 0;
            const normalize = {
                "RoomInfo.useMemo[totalPrice].normalize": (s)=>s?.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "")
            }["RoomInfo.useMemo[totalPrice].normalize"];
            Object.entries(addAct).forEach({
                "RoomInfo.useMemo[totalPrice]": ([key, value])=>{
                    const prop = normalize(key);
                    if (bookingDetails[prop] === true) {
                        extrasPrice += Number(value) || 0;
                    }
                }
            }["RoomInfo.useMemo[totalPrice]"]);
            return (basePrice + extrasPrice) * numberOfNights;
        }
    }["RoomInfo.useMemo[totalPrice]"], [
        bookingDetails,
        roomDetails,
        addAct,
        numberOfNights
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomInfo.useEffect": ()=>{
            const rawToken = localStorage.getItem("user_token");
            const authtoken = rawToken?.replace(/^"(.*)"$/, "$1") || null;
            setuserToken(authtoken ?? "");
            const fetchRoom = {
                "RoomInfo.useEffect.fetchRoom": async ()=>{
                    try {
                        const room = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllRoomByID"])(id);
                        if (room.success === false || !room.data) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/");
                        }
                        setroomDetails(room.data);
                        setBookingDetails({
                            "RoomInfo.useEffect.fetchRoom": (prev)=>({
                                    ...prev,
                                    token: authtoken || "",
                                    room_categories_id: room.data?.id ?? null
                                })
                        }["RoomInfo.useEffect.fetchRoom"]);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["RoomInfo.useEffect.fetchRoom"];
            fetchRoom();
            fetchAddAct();
        }
    }["RoomInfo.useEffect"], [
        id
    ]);
    const [foodMenu, setfoodMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomInfo.useEffect": ()=>{
            const wantFoodMenu = {
                "RoomInfo.useEffect.wantFoodMenu": async ()=>{
                    const foodMenu = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFoodMenu"])();
                    if (!foodMenu) return null;
                    setfoodMenu(foodMenu.data);
                }
            }["RoomInfo.useEffect.wantFoodMenu"];
            wantFoodMenu();
        }
    }["RoomInfo.useEffect"], []);
    const [activites, setactivites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomInfo.useEffect": ()=>{
            const wantActivites = {
                "RoomInfo.useEffect.wantActivites": async ()=>{
                    const activites = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivites"])();
                    if (!activites) return null;
                    setactivites(activites.data);
                }
            }["RoomInfo.useEffect.wantActivites"];
            wantActivites();
        }
    }["RoomInfo.useEffect"], []);
    const aboutRawText = roomDetails?.about_stay || "";
    let cleanText = aboutRawText.replace(/<[^>]*>/g, "");
    const sentences = cleanText.split(/&nbsp;+/g).map((s)=>s.trim()).filter(Boolean);
    const checkInRules = roomDetails?.check_in_rules;
    const checkInruleList = checkInRules?.match(/<li>(.*?)<\/li>/g)?.map((item)=>item.replace(/<\/?li>/g, ""));
    const checkoutRules = roomDetails?.check_out_rules;
    const checkOutruleList = checkoutRules?.match(/<li>(.*?)<\/li>/g)?.map((item)=>item.replace(/<\/?li>/g, ""));
    const onClick = async ()=>{
        if (isSubmitting) return;
        try {
            setIsSubmitting(true);
            const totalGuests = bookingDetails.adult_count + bookingDetails.child_count;
            if (roomDetails && totalGuests > roomDetails.capability) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Room capacity exceeded! Maximum ${roomDetails.capability} guests allowed. You selected ${totalGuests} guests.`, {
                    position: "top-center"
                });
                return;
            }
            if (totalGuests === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select at least one guest (adult or child)", {
                    position: "top-center"
                });
                return;
            }
            if (!bookingDetails.check_in || !bookingDetails.check_out) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select check-in and check-out dates", {
                    position: "top-center"
                });
                return;
            }
            const checkIn = new Date(bookingDetails.check_in);
            const checkOut = new Date(bookingDetails.check_out);
            if (checkOut <= checkIn) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Check-out date must be after check-in date", {
                    position: "top-center"
                });
                return;
            }
            if (!userToken) {
                const { name, email, phone, address } = bookingDetailsWithoutToken.customer_data;
                if (!name || !email || !phone || !address) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please fill in all customer details", {
                        position: "top-center"
                    });
                    return;
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid email address", {
                        position: "top-center"
                    });
                    return;
                }
                const phoneRegex = /^\d{10}$/;
                if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid 10-digit phone number", {
                        position: "top-center"
                    });
                    return;
                }
            }
            if (userToken) {
                const formattedBookingDetails = {
                    ...bookingDetails,
                    check_in: formatDateTime(bookingDetails.check_in),
                    check_out: formatDateTime(bookingDetails.check_out),
                    total: totalPrice,
                    token: userToken
                };
                const addBooking = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBookingWithToken"])(formattedBookingDetails);
                if (addBooking.success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Booking successful!", {
                        position: "top-center"
                    });
                    router.push(addBooking.data.redirect_url);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(addBooking.message || "Error in booking", {
                        position: "top-center"
                    });
                    console.error("Error in token-based booking");
                }
            } else {
                const formattedBookingDetailsWithoutToken = {
                    ...bookingDetailsWithoutToken,
                    check_in: formatDateTime(bookingDetails.check_in),
                    check_out: formatDateTime(bookingDetails.check_out),
                    child_count: bookingDetails.child_count,
                    adult_count: bookingDetails.adult_count,
                    extra_bed: bookingDetails.extra_bed,
                    fire_camp: bookingDetails.fire_camp,
                    jeep_safari: bookingDetails.jeep_safari,
                    special_food_menu: bookingDetails.special_food_menu,
                    activities: bookingDetails.activities,
                    total: totalPrice
                };
                const addBooking = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$users$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBookingWithoutToken"])(formattedBookingDetailsWithoutToken);
                if (addBooking.success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(addBooking.message, {
                        position: "top-center"
                    });
                    router.push(addBooking.data.redirect_url);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(addBooking.message, {
                        position: "top-center"
                    });
                }
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unexpected error occurred. Please try again.", {
                position: "top-center"
            });
            console.error("Booking error:", error);
        } finally{
            setIsSubmitting(false);
        }
    };
    const formatDateForDisplay = (dateString)=>{
        if (!dateString) return "";
        const date = new Date(dateString);
        const options = {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
        return date.toLocaleDateString("en-US", options);
    };
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomInfo.useEffect": ()=>{
            const updateWidth = {
                "RoomInfo.useEffect.updateWidth": ()=>setWidth(window.innerWidth)
            }["RoomInfo.useEffect.updateWidth"];
            updateWidth();
            window.addEventListener("resize", updateWidth);
            return ({
                "RoomInfo.useEffect": ()=>window.removeEventListener("resize", updateWidth)
            })["RoomInfo.useEffect"];
        }
    }["RoomInfo.useEffect"], []);
    if (!addAct || isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-[#011D38] border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/Room/RoomInfo.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#45443F] font-mono",
                        children: "Loading room details..."
                    }, void 0, false, {
                        fileName: "[project]/components/Room/RoomInfo.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Room/RoomInfo.tsx",
                lineNumber: 366,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Room/RoomInfo.tsx",
            lineNumber: 365,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            width < 768 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Room$2f$MobileRoomInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: id
            }, void 0, false, {
                fileName: "[project]/components/Room/RoomInfo.tsx",
                lineNumber: 377,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-121062add2f55945" + " " + "flex flex-col gap-4 pl-10 pr-10 mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-121062add2f55945" + " " + "flex gap-1 items-center justify-between opacity-0 animate-fadeInUp",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-121062add2f55945" + " " + "flex flex-col gap-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "jsx-121062add2f55945" + " " + "text-6xl font-mono text-[#45443F] tracking-tight",
                                    children: roomDetails?.name
                                }, void 0, false, {
                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-121062add2f55945" + " " + "flex gap-16 mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "group flex flex-col gap-2 items-center justify-center transition-transform duration-300 hover:scale-110",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "p-3 rounded-xl bg-[#F6F5F5] transition-colors duration-300 group-hover:bg-[#011D38]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inspection$2d$panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InspectionPanel$3e$__["InspectionPanel"], {
                                                    className: "transition-colors duration-300 text-[#5C5C5C] group-hover:text-white",
                                                    width: 40,
                                                    height: 40
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-121062add2f55945" + " " + "text-[#5C5C5C] text-sm font-medium",
                                                children: [
                                                    roomDetails?.square_ft,
                                                    "M²"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "group flex flex-col gap-2 items-center justify-center transition-transform duration-300 hover:scale-110",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "p-3 rounded-xl bg-[#F6F5F5] transition-colors duration-300 group-hover:bg-[#011D38]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"], {
                                                    className: "transition-colors duration-300 text-[#5C5C5C] group-hover:text-white",
                                                    width: 40,
                                                    height: 40
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 401,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-121062add2f55945" + " " + "text-[#5C5C5C] text-sm font-medium",
                                                children: [
                                                    "1-",
                                                    roomDetails?.capability,
                                                    " PERSON"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "group flex flex-col gap-2 items-center justify-center transition-transform duration-300 hover:scale-110",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "p-3 rounded-xl bg-[#F6F5F5] transition-colors duration-300 group-hover:bg-[#011D38]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__["BedDouble"], {
                                                    className: "transition-colors duration-300 text-[#5C5C5C] group-hover:text-white",
                                                    width: 40,
                                                    height: 40
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-121062add2f55945" + " " + "text-[#5C5C5C] text-sm font-medium",
                                                children: [
                                                    roomDetails?.beds,
                                                    " BEDS"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/RoomInfo.tsx",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-121062add2f55945" + " " + "flex gap-5 mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-121062add2f55945" + " " + "w-7/12 p-8 rounded-2xl h-full border border-[#D7D7D7] flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-121062add2f55945" + " " + "font-mono text-4xl uppercase text-[#45443F] tracking-wide",
                                                children: "ABOUT STAY"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-121062add2f55945" + " " + "list-none pl-0 space-y-3 text-gray-700 leading-relaxed",
                                                children: sentences.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            animationDelay: `${index * 0.1}s`
                                                        },
                                                        className: "jsx-121062add2f55945" + " " + "flex items-start gap-3 opacity-0 animate-fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-5 h-5 text-[#011D38] mt-0.5 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-121062add2f55945",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "w-full mt-10 h-px bg-gradient-to-r from-transparent via-[#D7D7D7] to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 449,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "mt-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-121062add2f55945" + " " + "font-mono text-4xl uppercase text-[#45443F] tracking-wide",
                                                children: "SERVICES & AMENITIES"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 453,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "grid md:grid-cols-3 gap-4 mt-10",
                                                children: roomDetails?.services.length !== 0 ? roomDetails?.services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            animationDelay: `${index * 0.05}s`
                                                        },
                                                        className: "jsx-121062add2f55945" + " " + "group p-5 rounded-xl bg-[#F6F5F5] flex gap-3 items-center text-black text-sm font-medium transition-all duration-300  hover:scale-105 cursor-pointer opacity-0 animate-fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-121062add2f55945" + " " + "w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: service.icon_pic,
                                                                    alt: service.service_name,
                                                                    width: 24,
                                                                    height: 24,
                                                                    className: "object-contain  transition-all duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-121062add2f55945",
                                                                children: service.service_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 23
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-121062add2f55945" + " " + "col-span-3 p-7 rounded-xl bg-[#F6F5F5] flex items-center justify-center text-[#5C5C5C] text-md",
                                                    children: "No services available for this room."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "w-full mt-10 h-px bg-gradient-to-r from-transparent via-[#D7D7D7] to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 484,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "mt-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-121062add2f55945" + " " + "font-mono text-4xl uppercase text-[#45443F] tracking-wide",
                                                children: "ROOM RULES"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 488,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "flex gap-20 mt-7 pl-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#3A3A3A] font-semibold mb-3 text-lg",
                                                                children: "Check In"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 21
                                                            }, this),
                                                            checkInruleList?.map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-121062add2f55945" + " " + "flex gap-2 items-center text-[#3A3A3A] mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__["Dot"], {
                                                                            className: "w-5 h-5 text-[#011D38]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                            lineNumber: 501,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-121062add2f55945",
                                                                            children: rule
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                            lineNumber: 502,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 492,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#3A3A3A] font-semibold mb-3 text-lg",
                                                                children: "Check Out"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 21
                                                            }, this),
                                                            checkOutruleList?.map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-121062add2f55945" + " " + "flex gap-2 items-center text-[#3A3A3A] mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__["Dot"], {
                                                                            className: "w-5 h-5 text-[#011D38]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                            lineNumber: 515,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-121062add2f55945",
                                                                            children: rule
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                            lineNumber: 516,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 491,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "flex flex-col gap-1 mt-10 pl-5 leading-relaxed text-[#3A3A3A]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: roomDetails?.room_rules || ""
                                                    },
                                                    className: "jsx-121062add2f55945"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 487,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-121062add2f55945" + " " + "w-5/12 flex flex-col gap-5 h-fit sticky top-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "w-full h-fit rounded-2xl p-8 bg-gradient-to-br from-[#011D38] to-[#023059] shadow-xl transform transition-all duration-300 hover:scale-[1.02]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-121062add2f55945" + " " + "text-white text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-121062add2f55945" + " " + "text-sm uppercase tracking-widest mb-2 text-gray-300",
                                                    children: "Starts From"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-121062add2f55945" + " " + "flex items-baseline justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-121062add2f55945" + " " + "font-mono text-6xl font-bold",
                                                            children: [
                                                                "₹",
                                                                roomDetails?.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-121062add2f55945" + " " + "text-gray-300",
                                                            children: "/night"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                            lineNumber: 535,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this),
                                    !userToken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "w-full h-fit rounded-2xl p-6 bg-[#011D38] shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-121062add2f55945" + " " + "font-mono text-2xl text-white mb-6 tracking-wide",
                                                children: "ENTER YOUR DETAILS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-2 block",
                                                                children: "Name *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 558,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: bookingDetailsWithoutToken.customer_data.name,
                                                                onChange: (e)=>setbookingDetailsWithoutToken((prev)=>({
                                                                            ...prev,
                                                                            customer_data: {
                                                                                ...prev.customer_data,
                                                                                name: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "Enter your Name",
                                                                className: "jsx-121062add2f55945" + " " + "w-full px-4 py-3 bg-transparent border-b-2 border-[#3a4f6a] text-white outline-none transition-all duration-300 focus:border-[#AA9061] placeholder-[#6a7f9a]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 561,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-2 block",
                                                                children: "Email *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                value: bookingDetailsWithoutToken.customer_data.email,
                                                                onChange: (e)=>setbookingDetailsWithoutToken((prev)=>({
                                                                            ...prev,
                                                                            customer_data: {
                                                                                ...prev.customer_data,
                                                                                email: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "Enter your E-Mail",
                                                                className: "jsx-121062add2f55945" + " " + "w-full px-4 py-3 bg-transparent border-b-2 border-[#3a4f6a] text-white outline-none transition-all duration-300 focus:border-[#AA9061] placeholder-[#6a7f9a]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-2 block",
                                                                children: "Address *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: bookingDetailsWithoutToken.customer_data.address,
                                                                onChange: (e)=>setbookingDetailsWithoutToken((prev)=>({
                                                                            ...prev,
                                                                            customer_data: {
                                                                                ...prev.customer_data,
                                                                                address: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "Enter your Address",
                                                                className: "jsx-121062add2f55945" + " " + "w-full px-4 py-3 bg-transparent border-b-2 border-[#3a4f6a] text-white outline-none transition-all duration-300 focus:border-[#AA9061] placeholder-[#6a7f9a]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-2 block",
                                                                children: "Phone *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 624,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: bookingDetailsWithoutToken.customer_data.phone,
                                                                onChange: (e)=>setbookingDetailsWithoutToken((prev)=>({
                                                                            ...prev,
                                                                            customer_data: {
                                                                                ...prev.customer_data,
                                                                                phone: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "Enter your Phone Number",
                                                                className: "jsx-121062add2f55945" + " " + "w-full px-4 py-3 bg-transparent border-b-2 border-[#3a4f6a] text-white outline-none transition-all duration-300 focus:border-[#AA9061] placeholder-[#6a7f9a]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 627,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 555,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 550,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "w-full h-fit rounded-2xl p-6 bg-[#011D38] shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-121062add2f55945" + " " + "font-mono text-2xl text-white mb-6 tracking-wide",
                                                children: "BOOK THIS ROOM"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-3 block",
                                                                children: "CHECK IN *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 656,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-121062add2f55945" + " " + "relative group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-121062add2f55945" + " " + "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            className: "h-5 w-5 text-[#AA9061] group-hover:text-[#C5C5C5] transition-colors duration-200"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                            lineNumber: 661,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 660,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "datetime-local",
                                                                        value: bookingDetails.check_in,
                                                                        onChange: (e)=>setBookingDetails({
                                                                                ...bookingDetails,
                                                                                check_in: e.target.value
                                                                            }),
                                                                        style: {
                                                                            colorScheme: "dark"
                                                                        },
                                                                        className: "jsx-121062add2f55945" + " " + "w-full pl-10 pr-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061] focus:border-transparent transition-all duration-200 hover:border-[#AA9061] shadow-inner"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 663,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    bookingDetails.check_in && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-121062add2f55945" + " " + "mt-2 pl-3 text-xs text-[#AA9061] font-medium",
                                                                        children: formatDateForDisplay(bookingDetails.check_in)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 676,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 659,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-3 block",
                                                                children: "CHECK OUT *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-121062add2f55945" + " " + "relative group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-121062add2f55945" + " " + "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            className: "h-5 w-5 text-[#AA9061] group-hover:text-[#C5C5C5] transition-colors duration-200"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                            lineNumber: 690,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 689,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "datetime-local",
                                                                        value: bookingDetails.check_out,
                                                                        onChange: (e)=>setBookingDetails({
                                                                                ...bookingDetails,
                                                                                check_out: e.target.value
                                                                            }),
                                                                        style: {
                                                                            colorScheme: "dark"
                                                                        },
                                                                        className: "jsx-121062add2f55945" + " " + "w-full pl-10 pr-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white placeholder-[#8a9aaa] focus:outline-none focus:ring-2 focus:ring-[#AA9061] focus:border-transparent transition-all duration-200 hover:border-[#AA9061] shadow-inner"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 692,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    bookingDetails.check_out && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-121062add2f55945" + " " + "mt-2 pl-3 text-xs text-[#AA9061] font-medium",
                                                                        children: formatDateForDisplay(bookingDetails.check_out)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 705,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 688,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 19
                                                    }, this),
                                                    bookingDetails.check_in && bookingDetails.check_out && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] rounded-xl p-4 border border-[#3a4f6a]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-121062add2f55945" + " " + "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm",
                                                                    children: "Total Nights"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                    lineNumber: 716,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-121062add2f55945" + " " + "text-[#AA9061] font-semibold text-lg",
                                                                    children: [
                                                                        numberOfNights,
                                                                        " ",
                                                                        numberOfNights === 1 ? "Night" : "Nights"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                    lineNumber: 719,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                            lineNumber: 715,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-3 block",
                                                                children: "ADULTS COUNT (18+) *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 728,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                type: "number",
                                                                max: roomDetails?.capability,
                                                                value: bookingDetails.adult_count,
                                                                onChange: (e)=>setBookingDetails({
                                                                        ...bookingDetails,
                                                                        adult_count: Number(e.target.value)
                                                                    }),
                                                                className: "w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 731,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-3 block",
                                                                children: "CHILDREN COUNT (0-17)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 747,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                max: roomDetails?.capability,
                                                                value: bookingDetails.child_count,
                                                                onChange: (e)=>setBookingDetails({
                                                                        ...bookingDetails,
                                                                        child_count: Number(e.target.value)
                                                                    }),
                                                                className: "jsx-121062add2f55945" + " " + "w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 750,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 746,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] rounded-xl p-4 border border-[#3a4f6a]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-121062add2f55945" + " " + "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm",
                                                                    children: "Total Guests"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                    lineNumber: 768,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-121062add2f55945" + " " + `font-semibold text-lg transition-colors duration-300 ${bookingDetails.adult_count + bookingDetails.child_count > (roomDetails?.capability || 0) ? "text-red-400" : "text-[#AA9061]"}`,
                                                                    children: [
                                                                        bookingDetails.adult_count + bookingDetails.child_count,
                                                                        " /",
                                                                        " ",
                                                                        roomDetails?.capability || 0
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                    lineNumber: 769,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 766,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 653,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 648,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-121062add2f55945" + " " + "w-full h-fit rounded-2xl p-6 bg-[#011D38] shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-121062add2f55945" + " " + "font-mono text-2xl text-white mb-6 tracking-wide",
                                                children: "ADD EXTRA"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 787,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-3 block",
                                                                children: "SPECIAL FOOD MENU"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 794,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: bookingDetails.special_food_menu[0] ?? "",
                                                                onChange: (e)=>setBookingDetails({
                                                                        ...bookingDetails,
                                                                        special_food_menu: [
                                                                            Number(e.target.value)
                                                                        ]
                                                                    }),
                                                                className: "jsx-121062add2f55945" + " " + "w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061] cursor-pointer",
                                                                children: foodMenu && Object.entries(foodMenu).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: key,
                                                                        className: "jsx-121062add2f55945" + " " + "bg-[#011D38]",
                                                                        children: value
                                                                    }, key, false, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 809,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 797,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] text-sm font-medium mb-3 block",
                                                                children: "ACTIVITIES & GAMES"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 818,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: bookingDetails.activities[0] ?? "",
                                                                onChange: (e)=>setBookingDetails({
                                                                        ...bookingDetails,
                                                                        activities: [
                                                                            Number(e.target.value)
                                                                        ]
                                                                    }),
                                                                className: "jsx-121062add2f55945" + " " + "w-full px-4 py-3 bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AA9061] transition-all duration-200 hover:border-[#AA9061] cursor-pointer",
                                                                children: activites && Object.entries(activites).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: key,
                                                                        className: "jsx-121062add2f55945" + " " + "bg-[#011D38]",
                                                                        children: value
                                                                    }, key, false, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 833,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 821,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 817,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "space-y-4 pt-4",
                                                        children: Object.entries(addAct).filter(([key])=>{
                                                            const normalize = (s)=>s?.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
                                                            const roomServiceNames = roomDetails?.services?.map((s)=>normalize(s.service_name)) || [];
                                                            return roomServiceNames.includes(normalize(key));
                                                        }).map(([key, value], idx)=>{
                                                            const propName = key.toString().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>setBookingDetails((prev)=>({
                                                                            ...prev,
                                                                            [propName]: !Boolean(prev[propName])
                                                                        })),
                                                                className: "jsx-121062add2f55945" + " " + "group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#1a2f4a] to-[#2a3f5a] border border-[#3a4f6a] transition-all duration-300 hover:border-[#AA9061] hover:shadow-lg cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-121062add2f55945" + " " + "flex gap-3 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-121062add2f55945" + " " + `w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${Boolean(bookingDetails[propName]) ? "bg-[#AA9061] border-[#AA9061]" : "border-[#5a6f8a] group-hover:border-[#AA9061]"}`,
                                                                                children: Boolean(bookingDetails[propName]) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    className: "w-3 h-3 text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                                    lineNumber: 882,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                                lineNumber: 874,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "jsx-121062add2f55945" + " " + "text-[#C5C5C5] capitalize cursor-pointer group-hover:text-white transition-colors duration-300",
                                                                                children: key.replace(/_/g, " ")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                                lineNumber: 885,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 873,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-121062add2f55945" + " " + "text-[#AA9061] font-semibold",
                                                                        children: [
                                                                            "₹ ",
                                                                            value
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 889,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 791,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-121062add2f55945" + " " + "mt-8 pt-6 border-t border-[#3a4f6a]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-121062add2f55945" + " " + "flex items-center justify-between mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-121062add2f55945" + " " + "flex flex-col gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-121062add2f55945" + " " + "text-2xl text-white font-semibold",
                                                                        children: "TOTAL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 900,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-121062add2f55945" + " " + "text-xs text-[#C5C5C5]",
                                                                        children: [
                                                                            "For ",
                                                                            numberOfNights,
                                                                            " ",
                                                                            numberOfNights === 1 ? "night" : "nights"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                        lineNumber: 901,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 899,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-121062add2f55945" + " " + "text-3xl text-[#AA9061] font-bold",
                                                                children: [
                                                                    "₹ ",
                                                                    totalPrice
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 905,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 898,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onClick,
                                                        disabled: isSubmitting,
                                                        className: "jsx-121062add2f55945" + " " + "w-full py-5 bg-gradient-to-r from-[#AA9061] to-[#c0a575] rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-121062add2f55945" + " " + "relative z-10",
                                                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-121062add2f55945" + " " + "flex items-center justify-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-121062add2f55945" + " " + "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                            lineNumber: 917,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Processing..."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                    lineNumber: 916,
                                                                    columnNumber: 25
                                                                }, this) : "BOOK NOW"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 914,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-121062add2f55945" + " " + "absolute inset-0 bg-gradient-to-r from-[#c0a575] to-[#AA9061] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                                lineNumber: 924,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                                lineNumber: 897,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Room/RoomInfo.tsx",
                                        lineNumber: 786,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Room/RoomInfo.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Room/RoomInfo.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Room/RoomInfo.tsx",
                lineNumber: 379,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "121062add2f55945",
                children: "@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.animate-fadeInUp.jsx-121062add2f55945{animation:.8s ease-out forwards fadeInUp}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#011d38;border-radius:4px}.jsx-121062add2f55945::-webkit-scrollbar-thumb:hover{background:#023059}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
};
_s(RoomInfo, "28WpRXjinLIUvBystqVYdFS+Ul0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RoomInfo;
const __TURBOPACK__default__export__ = RoomInfo;
var _c;
__turbopack_context__.k.register(_c, "RoomInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_3a0c99d4._.js.map