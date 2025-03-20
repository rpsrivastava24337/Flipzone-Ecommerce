package com.piaus.shopapp.service.interf;

import com.piaus.shopapp.dto.OrderRequest;
import com.piaus.shopapp.dto.Response;
import com.piaus.shopapp.enums.OrderStatus;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;

public interface OrderItemService {
    Response placeOrder(OrderRequest orderRequest);
    Response updateOrderItemStatus(Long orderItemId, String status);
    Response filterOrderItems(OrderStatus status, LocalDateTime startDate, LocalDateTime endDate, Long itemId, Pageable pageable);
}
