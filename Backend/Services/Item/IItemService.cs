using Backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Services.Item
{
    public interface IItemService
    {
        public Task<ServiceResponse<List<GetItemDto>>> GetAllItems();
        Task<ServiceResponse<List<GetItemDto>>> AddItem(AddItemDto newItem);
        Task<ServiceResponse<List<GetItemDto>>> DeleteItem(int itemId);
        Task<ServiceResponse<GetItemDto>> UpdateItem(UpdateItemDto updatedItem);
        Task<ServiceResponse<GetItemDto>> UpdateCondition(UpdateItemConditionDto updatedItem);
        Task<ServiceResponse<GetItemDto>> AddReservation(int itemId, int userId);
        Task<ServiceResponse<GetItemDto>> RemoveReservation(int itemId, int userId);
    }
}